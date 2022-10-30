import { Oval } from 'react-loader-spinner';
import { LoadMesseg } from './Loader.styled';


export const Loader = () => {
    return (
        <>
            <Oval
                height={60}
                width={60}
                color="#3f51b5"
                wrapperStyle={{
                    justifyContent: 'center',
                    marginTop: 15,
                }}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#3f51b5"
                strokeWidth={2}
                strokeWidthSecondary={2}
            />
            <LoadMesseg>Load...</LoadMesseg>
        </>
    )
}
