// Fetch companies from URL
export const fetchCompanies = () => {
  return fetch('https://api.tatts.com/svc/sales/vmax/web/data/lotto/companies')
    .then(res => res.json())
    .then(data => data.Companies.map(c => ({
      // Normalise the data properties a bit
      id: c.CompanyId,
      displayName: c.CompanyDisplayName,
      description: c.CompanyDescription,
      logoUrl: c.CompanyLogoUrl
    })))
}
