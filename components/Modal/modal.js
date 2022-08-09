import CardList from "../CardList/CardList";
import {useRouter} from "next/router";
import {useEffect} from "react";

const Modal = ({data, schools, lifeAtNUST, type}) => {

    useEffect(() => {
        document.querySelector('body').style.overflowY = 'hidden';
        return () => {
            document.querySelector('body').style.overflowY = 'auto';
        }
    }, []);

    const router = useRouter();

    const handleClick = e => {
        e.stopPropagation();
        if (e.currentTarget) router.push('/gallery');
    }

    return (
        <>
            <div onClick={handleClick}
                 className='absolute top-0 left-0 w-full z-50 overflow-y-auto max-h-full'>
                <div className='flex justify-center items-center'>
                    <div className='my-12 w-11/12 md:w-2/3 lg:w-1/2 rounded-3xl overflow-hidden bg-white'>
                        <div className='w-full h-96 bg-cover bg-no-repeat bg-center p-6'
                             style={{
                                 background: `linear-gradient(to top, rgba(114,2,64,0.3), rgba(114,2,64,0.3)), url(${data.image}) no-repeat top center`,
                                 backgroundSize: 'cover'
                             }}>
                            <p className='uppercase text-sm text-white'>{type}</p>
                            <h2 className='font-bold text-4xl text-white'>{data.name}</h2>
                        </div>

                        <p className='p-8 text-xl'>{data.content}</p>

                    </div>
                </div>
            </div>
            <div
                className='fixed top-0 left-0 w-full h-screen bg-prussian-blue bg-opacity-80 z-40'/>
            <CardList schools={schools} lifeAtNUST={lifeAtNUST}/>
        </>
    )
}

export default Modal;