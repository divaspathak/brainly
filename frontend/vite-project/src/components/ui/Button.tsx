export interface ButtonProps {
    variant: "primary" | "secondary"; 
    size: "sm" | "md" | "lg"; 
    text: string; 
    startIcon?: any; 
    endIcon?: any; 
    onClick: () => void; 

}

const Button = (props: ButtonProps) => {
  return (
    <button></button>
  )
}
<Button variant="primary" size="md" onClick = {()=>{}} startIcon = {"-"} text={"hello"} endIcon={"+"}/>

export default Button