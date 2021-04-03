import { FALLBACK_ERROR_MSG } from "../constants";
import axios from "../utils/axios";

class MotorService {
  async getMotor(slug) {
    const response = await axios.get(`/motors/${slug}`);
    if (!response.data) {
      throw new Error(FALLBACK_ERROR_MSG);
    }

    return response.data;
  }
}

const motorService = new MotorService();

export default Object.freeze(motorService);
