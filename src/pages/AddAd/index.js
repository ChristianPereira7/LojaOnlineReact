import React, { useState, useEffect, useRef } from 'react';
import { PageArea } from './styled';
import useApi from '../../helpers/LojaAPI';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { PageContainer, PageTitle, ErrorMessage } from '../../components/MainComponents';



const Page = () => {

    const api = useApi();

    const fileFild = useRef();
    
    const [categories, setCategories ] = useState([]);

    const [ title, setTitle ] = useState('');
    const [ category, setCategory ] = useState('');
    const [ price, setPrice ] = useState('');
    const [ priceNegotiable, setPriceNegotiable ] = useState(false);
    const [ desc, setDesc ] = useState('');


    const [ disabled, setDisabled ] = useState(false);
    const [ error, setError ] = useState('');

    useEffect(() => {
        const getCategories = async () => {
            const cats = await api.getCategories();
            setCategories(cats);
        }
        getCategories();
    }, [])

    const handleSubmit = async (e) => {
          e.preventDefault();
          setDisabled(true);
          setError('');

          let errors = [];

          if(!title.trim()){
              errors.push('Sem título');
          }

        if(!category){
            errors.push('Sem categoira');
        }

        if(errors.length === 0){
            const fData = new FormData();
            fData.append('title', title);
            fData.append('price', price);
            fData.append('priceneg', priceNegotiable);
        } else {
            setError(errors.join("\n"));
        }

        setDisabled(false);
    }


    const priceMask = createNumberMask({
        prefix:'R$ ',
        includeThousandsSeparator: true,
        thousandsSeparatorSymbol:'.',
        allowDecimal: true,
        decimalSymbol:','
    });


    return (
        <PageContainer>
            <PageTitle>Poste um anúncio</PageTitle>
            <PageArea>
                {error && 
                    <ErrorMessage>{error}</ErrorMessage>
                }
                <form onSubmit={handleSubmit}>
                    <label className="area">
                        <div className="area--title">Título</div>
                        <div className="area--input">
                        <input type="text" disabled={disabled} value={title} onChange={e=>setTitle(e.target.value)} required/>
                        </div>
                           
                    </label>
                
                    <label className="area">
                        <div className="area--title">Categoria</div>
                        <div className="area--input">
                        <select
                            disabled={disabled}
                            onChange={e=>setCategory(e.target.value)}
                            required
                        >
                            <options></options>
                            {categories && categories.map(i=>
                                <option key={i._id} value={i._id}>{i.name}</option>
                            )}
                        </select>
                        </div>
                           
                    </label>


                    <label className="area">
                        <div className="area--title">Preço</div>
                        <div className="area--input">
                            <MaskedInput
                                mask={priceMask}
                                placeholder="R$ "
                                disabled={disabled || priceNegotiable}
                                value={price}
                                onChance={e=>setPrice(e.target.value)}
                            />
                        </div>
                           
                    </label>

                    
                    <label className="area">
                        <div className="area--title">Preço Negociável</div>
                        <div className="area--input">
                            <input
                                type="checkbox"
                                disable={disabled} 
                                checked={priceNegotiable}
                                onChange={e=>setPriceNegotiable(!priceNegotiable)}
                            />
                        </div>
                           
                    </label>

                    <label className="area">
                        <div className="area--title">Descrição</div>
                        <div className="area--input">
                            <textarea
                            disabled={disabled}
                            value={desc}
                            onChange={e=>setDesc(e.target.value)}>
                                
                            </textarea>
                        </div>
                    </label>

                    <label className="area">
                        <div className="area--title">Imagens (1 ou mais)</div>
                        <div className="area--input">
                            <input
                                type="file"
                                disabled={disabled}
                                ref={fileFild}
                                multiple
                            />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button disabled={disabled}>Adicionar Anúncio</button>
                        </div>
                           
                    </label>
                    
                </form>
            </PageArea>
        </PageContainer>
    );
}

export default Page;