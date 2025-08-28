// GET /api/external/status - Status des intégrations
  fastify.get('/api/external/status', async (request, reply) => {
    try {
      const { externalIntegrationsService } = await import('../apps/api/src/ai/external-integrations');
      const status = externalIntegrationsService.getServicesStatus();

      return {
        ...status,
        instructions: {
          message: "Pour activer les services externes, configurez les clés API dans votre fichier .env",
          steps: [
            "1. Créez des comptes sur les services souhaités",
            "2. Obtenez vos clés API",
            "3. Ajoutez-les dans votre fichier .env",
            "4. Activez les services avec ENABLE_[SERVICE]=true"
          ],
          documentation: "Consultez .env.example pour voir toutes les variables disponibles"
        },
        last_check: new Date().toISOString()
      };
    } catch (error) {
      fastify.log.error('External services status error:', error);
      return reply.code(500).send({ error: 'Status check failed' });
    }
  });