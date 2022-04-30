import React, {useState} from 'react';
import {FAB, Portal, Provider} from 'react-native-paper';
import Reminder from './Reminder';

const Fab = () => {
  const [state, setState] = useState({open: false});
  const [reminder, openReminder] = useState(false);

  const onStateChange = ({open}) => setState({open});

  const {open} = state;

  return (
    <Provider>
      <Portal>
        <FAB.Group
          open={open}
          icon={open ? 'calendar-today' : 'plus'}
          actions={[
            {icon: 'plus', onPress: () => console.log('Pressed add')},
            {
              icon: 'star',
              label: 'Star',
              onPress: () => console.log('Pressed star'),
            },
            {
              icon: 'email',
              label: 'Email',
              onPress: () => console.log('Pressed email'),
            },
            {
              icon: 'bell',
              label: 'Reminder',
              onPress: () => {
                console.log('Pressed notifications');
                openReminder(!reminder);
              },
              small: false,
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
        <Reminder open={reminder} setOpen={openReminder} />
      </Portal>
    </Provider>
  );
};

export default Fab;
