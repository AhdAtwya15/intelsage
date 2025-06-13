interface IProps
{
    msg?:string;
}

const ErrorMsg = ({msg}:IProps) => {
    return msg ? <span className="block text-red-700 font-medium text-xs mt-1">{msg}</span> :null;
}

export default ErrorMsg;