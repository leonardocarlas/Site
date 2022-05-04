


type DarkmodeState = {
    isDarkmode : boolean
}
  
type DarkmodeAction = {
    type : string
}
  
type DispatchType = (args: DarkmodeAction) => DarkmodeAction