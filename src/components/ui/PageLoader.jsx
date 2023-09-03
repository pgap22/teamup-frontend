import Loader from "./Loader"

export const PageLoader = ()=>{
    return <div className="min-h-screen flex justify-center items-center">
      <Loader size={42} color="blue" />
    </div>
}