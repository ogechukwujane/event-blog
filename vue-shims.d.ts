declare module '*.vue' {
    import { DefineComponent } from "vue"
    const components: ReturnType<typeof DefineComponent>
    export default components
}