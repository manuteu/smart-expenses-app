export default function maskRenda(value: string) {
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{3})(\d)/, '$1.$2');
}
