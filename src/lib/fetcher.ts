const API_URL = '';
export const getDashboardData = async (startDate: string, endDate: string) => {
  const response = await fetch(`${API_URL}/api/expenses`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ startDate, endDate }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch dashboard data');
  }

  return response.json();
};
