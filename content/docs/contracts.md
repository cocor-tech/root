---
title: Smart Contracts
description: Cocor Tech smart contract architecture — Rust/Soroban contracts on the Stellar blockchain for decentralized savings circles.
order: 4
---

# Smart Contracts

Cocor Tech's flagship product Moistello is built on a suite of Rust/Soroban smart contracts deployed on the Stellar network.

## Contract Architecture

Five contracts work together:

### Circle Factory

Deploys new Circle instances and maintains a registry of all active circles. Handles circle creation and metadata storage.

### Circle (Core Engine)

The per-circle contract that manages the ROSCA lifecycle. Handles member management, contribution tracking, payout distribution, and state transitions.

### Treasury

Collects the 0.5% protocol fee on every payout distribution. Managed by protocol governance.

### Reputation Registry

Calculates and stores on-chain MoiScore (0-1000) based on contribution history, streaks, completions, and volume.

### Governance Token (MOI)

SEP-41 compliant governance token for DAO participation, protocol parameter changes, and fee structure updates.

## Security

- Role-based access control (Admin, Organizer, Member)
- Checked arithmetic to prevent overflow/underflow
- Pause mechanism for emergency stops
- 45+ unit tests covering all contract functions

## Network Endpoints

- Testnet: soroban-testnet.stellar.org
- Mainnet: soroban-mainnet.stellar.org
