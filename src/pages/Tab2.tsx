import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Riesgo Rec</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Riesgo Rec</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Riesgos Rec" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
