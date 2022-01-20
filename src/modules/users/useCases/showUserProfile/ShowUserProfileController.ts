import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params;

      return response
        .status(201)
        .send(
          this.showUserProfileUseCase.execute({ user_id: String(user_id) })
        );
    } catch (error) {
      return response.status(404).json({ error });
    }
  }
}

export { ShowUserProfileController };
