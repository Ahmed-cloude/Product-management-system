'use client'
import { AhmadStore } from "./app/redux/stroe";
import { Provider } from 'react-redux';

export default function StoreProvider(
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>
){

    return (
        <Provider store={AhmadStore} >
            {children}
        </Provider>
    )
}