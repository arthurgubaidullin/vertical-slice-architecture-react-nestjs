function createUUIDPreview(uuid: string) {
  return `${uuid.slice(0, 4)}…${uuid.slice(-4)}`;
}

export function UUIDPreview(props: { uuid: string }) {
  const s = createUUIDPreview(props.uuid);

  return <span>{s}</span>;
}
