import { ref } from '../config/constants'

export async function getCategories(subDomain) {
    try {
        const config = await ref.child(`categories`).once('value');
        return config.val();
    } catch (error) {
        console.warn('Error in getCategories', error);
    }
}