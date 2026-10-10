/**
 * Feedback API Service for Xpense Cloud
 * Connects to dev.xpense-cloud.in/api/v1/post endpoint powered by Go PostController.CreatePost
 */

export interface CreatePostRequest {
  email: string;
  name: string;
  description: string;
  email_id?: string;
  other_name?: string;
  author_name?: string;
}

export interface FeedbackSubmissionResponse {
  success: boolean;
  message?: string;
  data?: any;
}

export const FEEDBACK_API_ENDPOINT = 'https://dev.xpense-cloud.in/api/v1/post';

/**
 * Submits user feedback or feature request to the Go backend CreatePost endpoint.
 */
export async function submitFeedback(
  payload: CreatePostRequest
): Promise<FeedbackSubmissionResponse> {
  const cleanEmail = payload.email.trim();
  const cleanName = payload.name.trim();
  const cleanDesc = payload.description.trim();

  if (!cleanEmail) {
    throw new Error('Email is required');
  }
  if (!cleanName) {
    throw new Error('Name is required');
  }
  if (!cleanDesc) {
    throw new Error('Feedback description is required');
  }

  const bodyData: CreatePostRequest = {
    email: cleanEmail,
    name: cleanName,
    description: cleanDesc,
    author_name: cleanName,
  };

  const response = await fetch(FEEDBACK_API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(bodyData),
  });

  if (response.status === 429) {
    throw new Error('You have submitted feedback recently. Please wait a short while before trying again.');
  }

  const json = await response.json().catch(() => null);

  if (!response.ok) {
    const errorMsg =
      (json && (json.error || json.message)) ||
      `Submission failed (HTTP ${response.status}). Please try again.`;
    throw new Error(errorMsg);
  }

  return {
    success: true,
    message: (json && json.message) || 'Feedback submitted successfully',
    data: json,
  };
}
