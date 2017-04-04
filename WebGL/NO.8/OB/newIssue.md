我在对一个物体进行自定义碰撞行为时，定义这个物体在3秒之后消失，但是我发现在正常运行时候控制台会有很大概率报错（就是说有时候是不报错的），
报错显示：
>    Uncaught TypeError: Cannot read property 'a' of undefined
        w9.removeRigidBody @ ammo.js:1
        public_functions.removeObject @ physijs_worker.js:495
        self.onmessage @ physijs_worker.js:1412
    

在调试过后确定本地代码没有问题，根据提示定位到问题所在，初步猜测是在物体从场景被移除之后，物理引擎依旧对物体进行在场景中的一系列动作渲染，但是此时物体并不存在
，理由是如果在物体消失之后再没有后续的动作就不会报错。
所以我在报错的地方依次加上对物体是否存在的判断，
成功解决报错问题。过程中我发现ammo.js也存在这个问题，所以我猜测除了这些我修改的地方，其他地方也存在此问题。
即在物体在物理世界渲染的同时我们需要考虑这个物体已被移除的情况。

  When I defined that an object should disappear after 3 seconds during its user-defined collision behaviour, 
  I found it was likely that the console would sometimes throw errors in normal operation.(That means sometimes it doesn't.)  
  
  It shows that：
  
     Uncaught TypeError: Cannot read property 'a' of undefined  
        w9.removeRigidBody @ ammo.js:1  
        public_functions.removeObject @ physijs_worker.js:495  
        self.onmessage @ physijs_worker.js:1412  
        
  After ensuring local code right through debugging propgrams, I found a bug according to some cues.   
  
  The initial cause I guess was that when this object did not exist, the physical enginee still rendered a series of act 
  after the object had been removed from the scene. The basis was that if there was no following operation, the console would not throw errors even if the article did not exist.  
  
  So, I added some code about whether the object exists or not to the previous wrong places, and it truly take effect.   
  
  During the produre, I found ammo.js throwed errors, too.
  Thus, I guessed besides the previous ones, some other programs like this also have such problems.   
  
  So, it means that we need to take a consideration about whether the object removed or not when it is rendered in the phsical world.