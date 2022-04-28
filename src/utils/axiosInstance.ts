/** contributors
 * Loui
 */
import axios from 'axios';

export const axiosInstance = axios.create({
	baseURL: process.env.DEPLOY_URL,
});
