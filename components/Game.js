AFRAME.registerComponent('game',{
    schema:{
        elementId:{type:'string',default:'#ring1'}
    },
    isCollided:function(elementId){
        const element=document.querySelector(elementId)
        element.addEventListener('collide',()=>{
            if(elementId.includes('#ring')){
                console.log('Birds')
                console.log(elementId+' is collided')
            }
            else if(elementId.includes('#hurdle')){
                console.log('Birds')
                console.log(elementId+' is collided')
            }
        })
    },
    update:function(){
        this.isCollided(this.data.elementId)
    }
})
