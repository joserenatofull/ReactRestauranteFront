import React from 'react';

const BarraLateral = () => {

  return <>
    <aside>
      
      <div className="accordion pt-3" id="accordionExample">

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Estado
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">

              <ul className="list-group">
                <li className="list-group-item">
                  <input type='checkbox' name='estado' value='novo' /> Novo
                </li>
                <li className="list-group-item">
                  <input type='checkbox' name='estado' value='usado' /> Usado
                </li>
              </ul>

            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Memória
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">

              <ul className="list-group">
                <li className="list-group-item">
                  <input type='checkbox' name='memoria' value='4mb' /> 4 MB
                </li>
                <li className="list-group-item">
                  <input type='checkbox' name='memoria' value='8mb' /> 8 MB
                </li>
                <li className="list-group-item">
                  <input type='checkbox' name='memoria' value='16mb' /> 16 MB
                </li>
              </ul>

            </div>
          </div>
        </div>

      </div>

    </aside>
  </>;

};

export default BarraLateral;