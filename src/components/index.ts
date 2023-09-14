import SvgIcon from './SvgIcon/index.vue'
import HelloWorld from './HelloWorld.vue'

const allGloablComponent:any = { SvgIcon, HelloWorld};

export default {
    install(app:any){
        Object.keys(allGloablComponent).forEach(key=>{
            app.component(key ,allGloablComponent[key]);
        })
    }
}