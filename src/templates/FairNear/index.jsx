import './style.css'
import {NavBar} from '../../components/NavBar'
import Title from '../../components/Title'
import FairNearCard from '../../components/FairNearCard'
import { Footer } from '../../components/Footer'
import MenuBurguer from '../../components/MenuBurguer'

export const FairNear = () =>{
    return(
        <div className='all-content-container'>
            {/* <MenuBurguer/> */}
            <header/>
            <Title text={'Feiras Próximas'}/>
           <div className="nav-card-container">
                <NavBar/>
                <div className="cards">
                    <FairNearCard 
                        title={'Feira Livre da Rua Oscar Freire'}
                        img={'https://conteudo.solutudo.com.br/wp-content/uploads/2019/10/15220191645824798_5zxyp.jpg'} 
                        note={3.5}
                        dayWorkText ={'Domingo'}
                        hourWorkText = {'08:00 - 16:00'}
                        fairmanText = {'Aprox 4 feirantes cadastrados no yvy'}
                    />
                    <FairNearCard 
                        title={'Feira Livre da Rua Oscar Freire'}
                        img={'https://conteudo.solutudo.com.br/wp-content/uploads/2019/10/15220191645824798_5zxyp.jpg'} 
                        note={3.5}
                        dayWorkText ={'Domingo'}
                        hourWorkText = {'08:00 - 16:00'}
                        fairmanText = {'Aprox 4 feirantes cadastrados no yvy'}
                    />
                    <FairNearCard 
                        title={'Feira Livre da Rua Oscar Freire'}
                        img={'https://conteudo.solutudo.com.br/wp-content/uploads/2019/10/15220191645824798_5zxyp.jpg'} 
                        note={3.5}
                        dayWorkText ={'Domingo'}
                        hourWorkText = {'08:00 - 16:00'}
                        fairmanText = {'Aprox 4 feirantes cadastrados no yvy'}
                    />  
                </div>
            </div>
            <Footer/>

                
        </div>
    )
}


export default FairNear