import { statfsSync } from "fs";
import { cpus } from "os";
import { cpuUsage, freememPercentage, totalmem } from "os-utils";

const POLLING_INTERVAL = 500;

export function pollResources() {
  setInterval(async () => {
    const cpuUsage = await getCpuUsage();
    const ramUsage = getRamUsage();
    const storageData = getStorageData();
    console.log({ cpuUsage, ramUsage, storageUsage: storageData.usage });
  }, POLLING_INTERVAL);
}

function getCpuUsage() {
  return new Promise((resolve) => {
    cpuUsage(resolve);
  });
}

function getRamUsage() {
  return 1 - freememPercentage();
}

function getStorageData() {
  const stats = statfsSync(process.platform === "win32" ? "C://" : "/");
  const total = stats.bsize * stats.blocks;
  const free = stats.bsize * stats.bfree;

  return {
    total: Math.floor(total / 1_000_000_000),
    usage: 1 - free / total,
  };
}

export function getStaticData() {
  const totalStorage = getStorageData().total;
  const cpuModel = cpus()[0].model;
  const totalMemoryGB = Math.floor(totalmem() / 1024);

  return { totalStorage, cpuModel, totalMemoryGB };
}
