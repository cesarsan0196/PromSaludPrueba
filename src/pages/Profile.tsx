import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItemDivider} from '@ionic/react';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useHistory, RouteComponentProps } from "react-router-dom";
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import { IonItem, IonAvatar } from '@ionic/react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { megaphoneOutline, storefrontOutline, homeOutline, personCircleOutline } from 'ionicons/icons';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab4 from './Tab4';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import '../theme/variables.css';

setupIonicReact();

interface ResetProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const Dashboard: React.FC<ResetProps> = ({ match }) => {
  const history = useHistory();
  const [users, setUsers] = useState<Array<any>>([]);
  useEffect(() => {
    const api = axios.create({
        baseURL: `https://reqres.in/api`
    })
    api.get("/users")
        .then(res => {             
            setUsers(res.data.data)
        })
        .catch(error=>{
            console.log("Error fetching data")
        })
  }, [])
  return (
     
        <IonReactRouter>
            <IonTabs>
            <IonRouterOutlet>
                <Route exact path="/tab1">
                <Tab1 />
                </Route>
                <Route exact path="/tab2">
                <Tab2 />
                </Route>
                <Route path="/tab3">
                <Tab3 />
                </Route>
                <Route path="/tab4">
                <Tab4 />
                </Route>          
            </IonRouterOutlet>
            <IonTabBar slot="bottom" color="primary">
                <IonTabButton tab="tab1" href="/tab1">
                <IonIcon icon={homeOutline} />
                <IonLabel>inicio</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab2" href="/tab2">
                <IonIcon icon={megaphoneOutline} />
                <IonLabel>Riesgos Rec.</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab3" href="/tab3">
                <IonIcon icon={personCircleOutline} />
                <IonLabel>Mis Acciones</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab4" href="/tab4">
                <IonIcon icon={storefrontOutline} />
                <IonLabel>Tienda</IonLabel>
                </IonTabButton>
            </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    
  );
};

export default Dashboard;