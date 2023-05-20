import { createApp } from './app';
import { LOCAL_PORT } from './shared/constants';

createApp().listen(LOCAL_PORT, () => console.log(`Server started on port ${LOCAL_PORT}`));
