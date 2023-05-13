import { Box, Button, Container } from '@mui/material'
import { useRouter } from 'next/router'

export function DashboardLayout({
  children,
  backButton = true,
}: DashboardLayoutProps): JSX.Element {
  const router = useRouter()
  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        gap={2}
        bgcolor="whitesmoke"
        p={3}
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        {children}
        {backButton && (
          <Button
            variant="outlined"
            onClick={() => {
              router.back()
            }}
          >
            Regresar
          </Button>
        )}
      </Box>
    </Container>
  )
}
