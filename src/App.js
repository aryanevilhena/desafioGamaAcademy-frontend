// import './App.css';
import { useState, useEffect } from "react";
import * as S from './styled';
// import styled from "styled-components";
import axios from 'axios';
import './styles.css';
import logoJobs from './Logo-JOBSNET.png';
import imageJobs from './JobsImagem.jpg';
import imageJobsNET from './JOBSNET.png';



const App = () => {

  const fetchAddress = async () => {
    const address = await axios.get(`https://viacep.com.br/ws/${form.cep}/json/`);
    setForm({
      ...form,
      address: address.data.logradouro,
      district: address.data.bairro,
      city: address.data.localidade

    })
  };

  const createCandidate = async (candidate) => {
    try {
      const user = await axios.post('https://jobsnet-gamaacademy.herokuapp.com/register', form);
      if (user.status === 200) {
        alert('Cadastro Realizado com Sucesso!')
      } 
    } catch (error) {
      setCpfError(true);
    }
  };

  const [form, setForm] = useState({
    name: '',
    role: '',
    birthDate: '',
    maritalStatus: '',
    gender: '',
    cep: '',
    address: '',
    district: '',
    city: '',
    number: '',
    complement: '',
    phone1: '',
    phone2: '',
    cellPhone: '',
    contact: '',
    email: '',
    rg: '',
    cpf: '',
    hasVehicle: '',
    license: ''

  });

  useEffect(() => {
    console.log(form);
  }, [form]);

  const [cpfError, setCpfError] = useState(false);

  return (
    <>
      <S.Header>
        <img className="imgLogo" src={logoJobs} alt="Logo JobsNET"></img>
        <S.HeaderTitle>Recrutamento e Seleção de Profissionais</S.HeaderTitle>
      </S.Header>

      <section className="principal">

      <S.Content>
            <S.DivSectionJobs>
             <S.ImgJOBSNET src={imageJobsNET} alt="Jobs NET"></S.ImgJOBSNET>
            
             <S.Ptexto>
             A JobsNET é especialista em recrutamento e seleção de profissionais 
             nas mais diversas áreas. Cadastre-se GRATUITAMENTE no formulário ao lado e
             fique por dentro das melhores oportunidades &#5171;&#5171;&#5171;
             </S.Ptexto> 
            <img className="imgJobs" src={imageJobs} alt="Cadastre na JobsNET"></img>

            </S.DivSectionJobs>
      </S.Content>

      <S.ContentCadastro>

        <S.LabelTitle>DADOS PESSOAIS</S.LabelTitle>

        <S.DadosPessoais>
          <S.Div>
            <p><S.LabelRequired className="label">Nome Completo</S.LabelRequired></p>
            <S.FormInput placeholder="Digite seu Nome" onChange={(e) => {
              setForm({ ...form, name: e.target.value })
            }} value={form.name}></S.FormInput>
          </S.Div>


          <S.Div>
            <p><S.LabelRequired className="label">Cargo Pretendido/Profissão</S.LabelRequired></p>
            <S.FormInput onChange={(e) => {
              setForm({ ...form, role: e.target.value })
            }} value={form.role}></S.FormInput>
          </S.Div>
        </S.DadosPessoais>

        <S.DadosPessoais>
          <S.Div>
            <p><S.LabelRequired>Data de nascimento</S.LabelRequired></p>
            <S.FormInput type="date" onChange={(e) => {
              setForm({ ...form, birthDate: e.target.value })
            }} value={form.birthDate}></S.FormInput>
          </S.Div>

          <S.Div>
          <p><S.Label>Gênero</S.Label></p>
            <S.Select onChange={(e) => {
              setForm({ ...form, gender: e.target.value })
            }} value={form.gender}>
              <option value=""></option>
              <option value="femininoCis">Feminino Cis</option>
              <option value="masculinoCis">Masculino Cis</option>
              <option value="femininoTrans">Feminino Trans</option>
              <option value="masculinoTrans">Masculino Trans</option>
              <option value="outro">Outro</option>
            </S.Select>
          </S.Div>

          <S.Div>
          <p><S.Label>Estado Civil</S.Label></p>
            <S.Select onChange={(e) => {
              setForm({ ...form, maritalStatus: e.target.value })
            }} value={form.maritalStatus}>
              <option value=""></option>
              <option value="solteire">Solteiro(a)</option>
              <option value="casade">Casado(a)</option>
              <option value="viuve">Viúvo(a)</option>
              <option value="divorciade">Divorciado(a)</option>
            </S.Select>
          </S.Div>

        </S.DadosPessoais>

        <S.DadosPessoais>
          <S.Div>
          <p><S.LabelRequired>CEP</S.LabelRequired></p>
            <S.FormInput type="number" placeholder="99.999-999" onBlur={() => {
              fetchAddress();
            }} onChange={(e) => {
              setForm({ ...form, cep: e.target.value });
            }} value={form.cep}></S.FormInput>
          </S.Div>

          <S.Div>
          <p><S.LabelRequired>Endereço</S.LabelRequired></p>
            <S.FormInput onChange={(e) => {
              setForm({ ...form, address: e.target.value })
            }} value={form.address}></S.FormInput>
          </S.Div>

          <S.Div>
          <p><S.LabelRequired>Bairro</S.LabelRequired></p>
            <S.FormInput onChange={(e) => {
              setForm({ ...form, district: e.target.value })
            }} value={form.district}></S.FormInput>
          </S.Div>

          <S.Div>
          <p><S.LabelRequired>Cidade</S.LabelRequired></p>
            <S.FormInput onChange={(e) => {
              setForm({ ...form, city: e.target.value })
            }} value={form.city}></S.FormInput>
          </S.Div>

          <S.Div>
          <p><S.LabelRequired>Número</S.LabelRequired></p>
            <S.FormInput type="number" onChange={(e) => {
              setForm({ ...form, number: e.target.value })
            }} value={form.number}></S.FormInput>
          </S.Div>

          <S.Div>
          <p><S.Label>Complemento</S.Label></p>
            <S.FormInput onChange={(e) => {
              setForm({ ...form, complement: e.target.value })
            }} value={form.complement}></S.FormInput>
          </S.Div>
        </S.DadosPessoais>

        {/* <button onClick={() => fetchAddress()}>Buscar CEP</button> */}
        <S.DadosPessoais>
          <S.Div>
          <p><S.Label>Telefone 1</S.Label></p>
            <S.FormInput type="number" placeholder="(99)9999-9999" onChange={(e) => {
              setForm({ ...form, phone1: e.target.value })
            }} value={form.phone1}></S.FormInput>
          </S.Div>

          <S.Div>
          <p><S.Label>Telefone 2</S.Label></p>
            <S.FormInput type="number" placeholder="(99)9999-9999" onChange={(e) => {
              setForm({ ...form, phone2: e.target.value })
            }} value={form.phone2}></S.FormInput>
          </S.Div>

          <S.Div>
          <p><S.LabelRequired>Celular</S.LabelRequired></p>
            <S.FormInput type="number" placeholder="(99)99999-9999" onChange={(e) => {
              setForm({ ...form, cellPhone: e.target.value })
            }} value={form.cellPhone}></S.FormInput>
          </S.Div>
        </S.DadosPessoais>

        <S.DadosPessoais>
          <S.Div>
          <p><S.Label>Linkedin</S.Label></p>
            <S.FormInput placeholder="Informe seu Linkedin" onChange={(e) => {
              setForm({ ...form, contact: e.target.value })
            }} value={form.contact}></S.FormInput>
          </S.Div>

          <S.Div>
          <p><S.LabelRequired>Email</S.LabelRequired></p>
            <S.FormInput placeholder="seuemail@email.com" type="email" onChange={(e) => {
              setForm({ ...form, email: e.target.value })
            }} value={form.email}></S.FormInput>
          </S.Div>
        </S.DadosPessoais>

        <S.LabelTitle>DOCUMENTOS</S.LabelTitle>
        <S.Documentos>
          <S.Div>
          <p><S.Label>RG</S.Label></p>
            <S.FormInput type="number" onChange={(e) => {
              setForm({ ...form, rg: e.target.value })
            }} value={form.rg}></S.FormInput>
          </S.Div>

          <S.Div>
          <p><S.LabelRequired>CPF</S.LabelRequired></p>
            <S.FormInput type="number" placeholder="999.999.999-99" onChange={(e) => {
              setForm({ ...form, cpf: e.target.value })
            }} value={form.cpf}></S.FormInput>
            <S.ErrorSpan isError={cpfError}>CPF já está cadastrado</S.ErrorSpan>
          </S.Div>

          <S.Div>
          <p><S.Label>Possui Veiculo</S.Label></p>
            <S.Select onChange={(e) => {
              setForm({ ...form, hasVehicle: e.target.value })
            }} value={form.hasVehicle}>
              <option value=""></option>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </S.Select>
          </S.Div>

          <S.Div>
          <p><S.Label>Habilitação</S.Label></p>
            <S.Select onChange={(e) => {
              setForm({ ...form, license: e.target.value })
            }} value={form.license}>
              <option value=""></option>
              <option value="CategoriaA">Categoria A</option>
              <option value="CategoriaB">Categoria B</option>
              <option value="CategoriaC">Categoria C</option>
              <option value="CategoriaD">Categoria D</option>
              <option value="CategoriaE">Categoria E</option>
            </S.Select>
          </S.Div>

        </S.Documentos>
          
        <S.Button onClick={() => createCandidate()}>Cadastrar</S.Button>

      </S.ContentCadastro>

      
      </section>
    </>
  );
}

export default App;
