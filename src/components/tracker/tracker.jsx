import react,{useState} from 'react';


const Tracker=()=>{

    const [description,setDescription]=useState('');
    const[amount,setAmount]=useState(null);
    const [transaction,setTransaction]=useState([]);
    const[editId,setEditId]=useState(null);

    const addTransaction=(e)=>{
        e.preventDefault();
        if(editId){
            const newTransaction=transaction.map((t) => (
                t.id === editId ? {id:editId,description,amount}:t
            ))
            setTransaction(newTransaction);
            setEditId(null);
        }
        
       else {
            setTransaction([...transaction,{id:Date.now(),description,amount}])
            
        }
        setDescription('')
            setAmount(0)
       
    }
    const handleEdit = (t) =>{
        setEditId(t.id);
        setDescription(t.description);
        setAmount(t.amount);
    }
    const handleDelete = (id) => {
        setTransaction(transaction.filter(t => t.id !== id));
    }
    return(
    <>
     <div className='bg-gray-200 min-h-screen flex flex-col justify-center items-center'>
        <h1 className='text 3x1 font-bold text-center pt-12'> Personal Finance Tracker</h1>
        <div className='container mt-20 mx-auto px-5'> 
        <div className='p-5 bg-white rounded-lg shadow-lg my-auto '>
        <h2 className='text-2x-1 flex justify-center font-bold text-center mb-5'>Transactions</h2>
                <table className='w-full table-fixed flex flex-col items-between text-left'>
                    <thead>
                        <tr className='flex w-full justify-between '>
                        <th className='text-x1 font-bold w-full md:w-1/4 px-2 py-2'>Description</th>
                        <th className='text-x1 font-bold w-full md:w-1/4 px-2 py-2'>Amount</th>
                        <th className='text-x1 font-bold w-full md:w-1/4 px-2 py-2'>Action</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        {Array.isArray(transaction) && transaction.map((t)=>(
                            <tr key={t.id} className='flex w-full justify-between'>
                                <td className='py-2 px-2 w-full md:w-1/4'>{t.description}</td>
                                <td className='py-2 px-2 w-full md:w-1/4'>{t.amount}</td>
                                <td className='py-2 px-2 w-full md:w-1/4 flex justify-center items-center'>
    <button className='bg-yellow-500 px-4 py-2 text-white mr-2' onClick={e=>handleEdit(t)}>edit</button>
    <button className='bg-red-500 px-4 py-2 text-white' onClick={e=>handleDelete(t.id)}>delete</button>
</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            <div className='mt-16 mb-4 w-full lg:w-1/2 xl:w-1/3 p-5 mx-auto rounded shadow-lg border border-gray-100'>
                
                <h1 className='text-xl  font-bold text-center mb-5'> Add your transaction</h1>
                <form onSubmit={addTransaction}className='flex text-center flex-col mx-auto border-1 border-double border-indigo-600 w-full justify-between my-5'>
                    <input className='border border-slate-300 rounded-md w-full px-2 py-2 mb-2' type='text' placeholder='Description' onChange={e => setDescription(e.target.value)} value={description}></input>
                    <input type='number ' className='border border-slate-300 rounded-md w-full px-2 py-2 mb-2' placeholder='amount' onChange={e => setAmount(e.target.value)} value={amount}></input>
                    <button className='bg-violet-500 hover:bg-violet-600 active:bg-violet--700 focus:outline-none focus:ring focus:ring-violet-300 px-4 py-2 text-white' type='submit'>Add Transaction</button>
                </form>
            </div>
        </div>
        </div>
        
            
        </div>
    </>
       
    )
}
export default Tracker;

