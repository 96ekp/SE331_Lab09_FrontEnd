import type { OrganizerItem } from '@/type'
import type { AxiosInstance, AxiosResponse } from 'axios'
import axios from 'axios'
const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  // Get a list of organizers with pagination
  getOrganizers(perPage: number, page: number): Promise<AxiosResponse<OrganizerItem[]>> {
    return apiClient.get<OrganizerItem[]>('/organizers?_limit=' + perPage + '&_page=' + page)
  },
  getOrganizerById(id: number): Promise<AxiosResponse<OrganizerItem>> {
    return apiClient.get<OrganizerItem>('organizers/' + id.toString())
  },

  // Save an organizer to the database
  saveOrganizer(organizer: OrganizerItem): Promise<AxiosResponse<OrganizerItem>> {
    return apiClient.post<OrganizerItem>('/organizers', organizer)
  }
}
