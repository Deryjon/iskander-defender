export interface ApiSuccessResponse {
  success: boolean
  message: string
}

export interface ApiErrorResponse {
  success: false
  message: string
  errors?: Record<string, string>
}
