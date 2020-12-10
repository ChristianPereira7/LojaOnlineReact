import React, { useState } from 'react';
import { SearchArea, PageArea } from './styled';
import useApi from '../../helpers/LojaAPI'
import { PageContainer} from '../../components/MainComponents';



const Page = () => {

    const api = useApi();

    return (
        <>
            <SearchArea>
                <PageContainer>
                    <div className="searchBox">
                        <form method="POST" action="/ads">
                            <input type="text" name="q" placeholder="O que você procura?"/>
                            <select name="state">

                            </select>
                            <button>Pesquisar</button>
                        </form>
                    </div>
                    <div className="categoryList">

                    </div>
                </PageContainer>
            </SearchArea>

           <PageContainer>
                <PageArea>
                  ...
                </PageArea>
           </PageContainer>
        </>
       
    );
}

export default Page;