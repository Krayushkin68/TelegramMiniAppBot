import {api} from "boot/axios";
import {ConnectInfo} from "src/api/types/panelTypes";
import {HttpStatusCode} from "axios";

export const getConnectInfoByEmail = async (email: string): Promise<ConnectInfo | null> => {
  try {
    const response = await api.get(`/panel/client/info_by_email/${email}`);
    return response.data;
  } catch (error: any) {
    if (error.response.status === HttpStatusCode.NotFound) {
      console.error("Connect info not found:", error);
      return null;
    } else {
      console.error("Error getting connect info from server:", error);
      return null;
    }
  }
}
