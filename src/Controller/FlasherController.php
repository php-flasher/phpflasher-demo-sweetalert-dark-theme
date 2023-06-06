<?php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FlasherController extends AbstractController
{
    #[Route('/')]
    public function flash(): Response
    {
        sweetalert()->addSaved();

        return $this->render('view.html.twig');
    }
}
