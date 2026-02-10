function Task(){
    return(
        <>
        <div>
                <p>hi</p>
                <p>hi</p>
                 <button
            onClick={()=>{
                if(s.status === 'done'){
                    setStatus('not done')
                }
                else if(s.status === 'not done'){
                    setStatus('done')
                }
            }}
            >Action</button>
                </div>
        </>
    )
}
export default Task;