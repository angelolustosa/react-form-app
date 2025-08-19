// src/App.js
import { useState, useEffect } from "react";
import InputField from "./components/InputField";
import SelectField from "./components/SelectField";

function App() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    idade: "",
    genero: "",
    cep: "",
    logradouro: "",
    bairro: "",
    cidade: "",
    estado: ""
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("dados"); // controla aba ativa

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "cep") fetchEndereco(value);
  };

  const fetchEndereco = async (cep) => {
    try {
      const cleanedCep = cep.replace(/\D/g, "");
      if (cleanedCep.length === 8) {
        const res = await fetch(`https://viacep.com.br/ws/${cleanedCep}/json/`);
        const data = await res.json();
        if (!data.erro) {
          setFormData((prev) => ({
            ...prev,
            logradouro: data.logradouro || "",
            bairro: data.bairro || "",
            cidade: data.localidade || "",
            estado: data.uf || ""
          }));
        }
      }
    } catch (err) {
      console.error("Erro ao buscar CEP:", err);
    }
  };

  const validate = () => {
    const errors = {};
    if (!formData.nome) errors.nome = "Nome é obrigatório";
    if (!formData.email) errors.email = "Email é obrigatório";
    if (!formData.idade) errors.idade = "Idade é obrigatória";
    if (!formData.genero) errors.genero = "Gênero é obrigatório";
    if (!formData.cep) errors.cep = "CEP é obrigatório";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      alert(
        `Formulário enviado com sucesso!\n${JSON.stringify(formData, null, 2)}`
      );
      setFormData({
        nome: "",
        email: "",
        idade: "",
        genero: "",
        cep: "",
        logradouro: "",
        bairro: "",
        cidade: "",
        estado: ""
      });
      setIsSubmitted(true);
    } else {
      setIsSubmitted(false);
    }
  };

  useEffect(() => {
    console.log("Form data mudou:", formData);
  }, [formData]);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ maxWidth: "600px", width: "100%" }}>
        <h2 className="mb-4 text-center">Formulário de Cadastro</h2>

        {/* Nav Tabs */}
        <ul className="nav nav-tabs mb-3">
          <li className="nav-item">
            <button
              type="button"
              className={`nav-link ${activeTab === "dados" ? "active" : ""}`}
              onClick={() => setActiveTab("dados")}
            >
              Dados Pessoais
            </button>
          </li>
          <li className="nav-item">
            <button
              type="button"
              className={`nav-link ${activeTab === "endereco" ? "active" : ""}`}
              onClick={() => setActiveTab("endereco")}
            >
              Endereço
            </button>
          </li>
        </ul>

        <form onSubmit={handleSubmit}>
          <div className="tab-content">
            {/* Aba Dados Pessoais */}
            {activeTab === "dados" && (
              <div className="tab-pane fade show active card card-body mb-3">
                <InputField
                  label="Nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                />
                {formErrors.nome && <div className="text-danger">{formErrors.nome}</div>}

                <InputField
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {formErrors.email && <div className="text-danger">{formErrors.email}</div>}

                <InputField
                  label="Idade"
                  name="idade"
                  type="number"
                  value={formData.idade}
                  onChange={handleChange}
                  required
                />
                {formErrors.idade && <div className="text-danger">{formErrors.idade}</div>}

                <SelectField
                  label="Gênero"
                  name="genero"
                  value={formData.genero}
                  onChange={handleChange}
                  options={[
                    { label: "Masculino", value: "masculino" },
                    { label: "Feminino", value: "feminino" },
                    { label: "Outro", value: "outro" }
                  ]}
                  required
                />
                {formErrors.genero && (
                  <div className="text-danger">{formErrors.genero}</div>
                )}
              </div>
            )}

            {/* Aba Endereço */}
            {activeTab === "endereco" && (
              <div className="tab-pane fade show active card card-body mb-3">
                <InputField
                  label="CEP"
                  name="cep"
                  value={formData.cep}
                  onChange={handleChange}
                  required
                />
                {formErrors.cep && <div className="text-danger">{formErrors.cep}</div>}

                <InputField
                  label="Logradouro"
                  name="logradouro"
                  value={formData.logradouro}
                  onChange={handleChange}
                />
                <InputField
                  label="Bairro"
                  name="bairro"
                  value={formData.bairro}
                  onChange={handleChange}
                />
                <InputField
                  label="Cidade"
                  name="cidade"
                  value={formData.cidade}
                  onChange={handleChange}
                />
                <InputField
                  label="Estado"
                  name="estado"
                  value={formData.estado}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>

          {/* Botão de envio */}
          <button type="submit" className="btn btn-primary w-100 mt-3">
            Enviar
          </button>
        </form>

        {isSubmitted && (
          <div className="alert alert-success mt-3 text-center">
            Formulário enviado com sucesso!
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
