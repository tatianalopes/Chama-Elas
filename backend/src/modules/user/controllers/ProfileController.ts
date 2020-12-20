import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ShowProfileService from '../services/ShowProfileService';

export default class ProfileController {
  public async show(request: Request, response: Response): Promise<Response> {
    const userId = request.user.id;

    const showProfile = container.resolve(ShowProfileService);
    const user = await showProfile.execute({ userId });

    return response.json(user);
  }
}
