import { UUIDV4 } from '@org/uuid-v4';

function createUUIDPreview(uuid: UUIDV4) {
  const uuidAsString = uuid.toString();

  return `${uuidAsString.slice(0, 4)}…${uuidAsString.slice(-4)}`;
}

export function UUIDPreview(props: { uuid: UUIDV4 }) {
  const s = createUUIDPreview(props.uuid);

  return <span>{s}</span>;
}
