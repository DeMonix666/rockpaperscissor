<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class RockPaperScissorTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testApiOk()
    {
        $response = $this->post('/api/process', [
            'choice' => 'rock'
        ]);

        $response->dump();

        $response->assertStatus(200);
    }

    public function testApiInvalid()
    {
        $response = $this->post('/api/process', [
            'choice' => ''
        ]);

        $response->dump();

        $response->assertStatus(200);
    }
}
