from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def home():
    return {"message": "Backend is running"}

@router.get("/api/health")
def health_check():
    return {"status": "ok"}