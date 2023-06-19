export const login = ( client ) => async ( params ) => {

    try{
        const { data } = await client.post( '/auth/signin', params );
        console.info( '=> Login Auth Data: ', data );
        return data;
    } catch ( error ) {
        console.info( '===> Login Auth error: ', error.message );
        return { success : false };
    }

}