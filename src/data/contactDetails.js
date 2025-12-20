import EmailSvg from "../components/svg/Contact/EmailSvg";
import LocationSvg from "../components/svg/Contact/LocationSvg";

export const contactDetails = [
  {
    id: crypto.randomUUID(),
    icon: LocationSvg,
    title: 'Our Location',
    address: [
      {
        id: crypto.randomUUID(),
        detailsAddress: '401 Broadway, 24th Floor, Orchard Cloud View, London'
      }
    ]
  },
  {
    id: crypto.randomUUID(),
    icon: EmailSvg,
    title: 'How Can We Help?',
    address: [
      {
        id: crypto.randomUUID(),
        detailsAddress: 'info@yourdomain.com',
      },
      {
        id: crypto.randomUUID(),
        detailsAddress: 'contact@yourdomain.com',
      },
    ]
  }
]