import Navbar from "../../Navbar";
import React from "react";
import "./Aide.css";
import "antd/dist/antd.css";
import { Collapse} from "antd";

const { Panel } = Collapse;

function Aide() {
  return (
    <div>
      <Navbar />
      <div id="faq" className="block faqBlock">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>Centre d'aide en ligne</h2>
            <p className="paragaide">Les questions les plus fréquentes</p>
          </div>

          <Collapse>
            <Panel
              header="Comment accéder à mes informations personnelles?"
              key="1"
            >
              <p className="paragaide">
                Vous pouvez accéder à vos informations personnelles à partir du
                menu "Utilisateur" en haut à droite de chaque page. Il vous
                suffit de cliquer sur la section "Profil".
              </p>
            </Panel>
            <Panel
              header="Comment accéder à la liste de mes véhicules?"
              key="3"
            >
              <p className="paragaide">
                Vous pouvez accéder à la liste de vos véhicules en sélectionnant
                "Voitures" en haut, au milieu de la barre de navigation.
              </p>
            </Panel>
            <Panel header="Comment ajouter un véhicule?" key="3">
              <p className="paragaide">
                {" "}
                Vous pouvez ajouter un véhicule en sélectionnant "Voitures" en
                haut, au milieu de la barre de navigation.Vous devrez ensuite
                appuyer sur le bouton "Ajouter une voiture" dans le menu à
                gauche.
              </p>
            </Panel>
            <Panel header="Comment supprimer un véhicule?" key="4">
              <p className="paragaide">
                {" "}
                Vous pouvez supprimer un véhicule en sélectionnant "Voitures" en
                haut, au milieu de la barre de navigation.Vous devrez ensuite
                appuyer sur le bouton "Supprimer une voiture" dans le menu à
                gauche.
              </p>
            </Panel>
            <Panel header="Comment tracker un véhicule?" key="5">
              <p className="paragaide">
                {" "}
                Vous pouvez tracker un véhicule en sélectionnant "Tracking" en
                haut, au milieu de la barre de navigation.Vous devrez ensuite
                saisir l'intervalle du tracking, sélectionner le véhicule
                souhaité et appuyer sur le bouton "Afficher".
              </p>
            </Panel>
            <Panel header="Pourquoi la carte n'affiche rien?" key="6">
              <p className="paragaide">
                {" "}
                Il faut sélectionner la ou les voitures configurées avec 
                notre application LOCAR VOITURE.
                Si cela est déjà le cas, cela signifie que votre voiture n'a pas été 
                trackée lors de l'intervalle souhaité.
              </p>
            </Panel>
          </Collapse>

          <div className="quickSupport">
            <h3>Encore besoin d'aide?</h3>
            <p className="paragaide">Contactez-nous par e-mail :</p>
            <p className="paragaide">LocarApps@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aide;
